const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Steady. Built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
