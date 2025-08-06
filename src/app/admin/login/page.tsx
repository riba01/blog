import { Metadata } from 'next';
import LoginForm from '../../../components/Admin/LoginForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Login Admin',
};

export default async function LoginPage() {
  return <LoginForm />;
}
