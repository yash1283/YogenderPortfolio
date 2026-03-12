import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="bg-dark text-light py-4 w-100 mt-auto">
      <div className="container-fluid text-center">

        <p className="mb-2">
          © {new Date().getFullYear()} Yogender Singh. All rights reserved.
        </p>

        <p className="mb-0 d-flex justify-content-center align-items-center gap-2">
          Created with 
          <FaReact className="react-logo" />
          React
        </p>

      </div>
    </footer>
    </>
  );
}