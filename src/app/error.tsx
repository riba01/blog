'use client';
import ErrorMessage from '../components/ErrorMessage';

/* type RootErrorPageProps = {
  error: Error;
  resetError: () => void;
}; */

export default function RootErrorPage(/* { error }: RootErrorPageProps */) {
  /* useEffect(() => {
    //console.log('Error: ', error);
  }, [error]); */
  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      contentText='Oops! Ocorreu um erro que não conseguimos recuperar.'
    />
  );
}
