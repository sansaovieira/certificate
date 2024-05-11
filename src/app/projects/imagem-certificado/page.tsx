import Image from 'next/image';
import Link from 'next/link';

const ImagemCertificado = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-center font-semibold text-3xl mb-4">Você ganhou um certificado🤗</h1>
      <Image src="/certificate.png" alt="Certificado" width={800} height={250} />
      <Link className='mt-4 inline-block px-4 py-2 text-white bg-[#89c2c1] rounded hover:bg-[#2c5756] transition duration-200' href="/"> 
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default ImagemCertificado;
