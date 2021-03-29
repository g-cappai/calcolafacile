import Link from "next/link";

export default function ContactUsBlock() {
  return (
    <div className="outer-container">
      <Link href="/contatti">
        <a className="norm-link"> Contatti</a>
      </Link>
    </div>
  );
}
