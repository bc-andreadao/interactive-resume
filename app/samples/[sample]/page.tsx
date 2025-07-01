import { redirect } from 'next/navigation';

export default function PDFPage( {params}: { params: { sample: string } }) {
  redirect(`/assets/pdfs/${params.sample}.pdf`);
}