const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto px-8 md:px-16 max-w-6xl">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Steady
        </p>
      </div>
    </footer>
  );
};

export default Footer;
