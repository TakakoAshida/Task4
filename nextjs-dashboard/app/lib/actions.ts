'use server';

// 型検証にZodという型検証ライブラリを使用
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import postgres from 'postgres';
import { redirect } from 'next/navigation';
// import { SquaresPlusIcon } from '@heroicons/react/24/outline';

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});
   
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } =  CreateInvoice.parse({
        // FormDataから値を取得し、Zodで型検証を行う
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    // console.log(rawFormData);
    // 金額をセントに変換
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try{
        // SQLクエリを実行してデータベースに新しい請求書を挿入
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
    }catch (error) {
        console.error(error);
    }

    // データベースが更新されたあと、パスが再検証されサーバーから最新のデータを取得
    revalidatePath('/dashboard/invoices');
    // リダイレクトを行い、ユーザーを請求書の一覧ページに戻す
    redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;
   
    try{
        await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
        `;
    }catch (error) {
        console.error(error);
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
  
export async function deleteInvoice(id: string) {
    throw new Error('Failed toDelete Invoice');
    
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
}