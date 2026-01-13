import Link from 'next/link';

interface CTAButtonsProps {
  variant?: 'default' | 'stacked';
  className?: string;
}

export default function CTAButtons({ variant = 'default', className = '' }: CTAButtonsProps) {
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <Link
          href="/contacto"
          className="btn btn-primary text-center"
        >
          Consultá tu operación
        </Link>
        <Link
          href="/servicios"
          className="btn btn-secondary text-center"
        >
          Nuestros servicios
        </Link>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link
        href="/contacto"
        className="btn btn-primary"
      >
        Consultá tu operación
      </Link>
      <Link
        href="/servicios"
        className="btn btn-secondary"
      >
        Nuestros servicios
      </Link>
    </div>
  );
}
