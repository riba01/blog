import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Login Admin',
};

export default async function LoginPage() {
  return (
    <div className='container flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>Login</h1>
      <p>Login content page</p>
    </div>
  );
}
