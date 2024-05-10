
import Image from 'next/image';

const ImagemCertificado = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center font-semibold text-3xl mb-4">Você ganhou um certificado!🤗</h1>
      <Image src="/certificate.png" alt="Certificado" width={800} height={250} />
    </div>
  );
};

export default ImagemCertificado;
