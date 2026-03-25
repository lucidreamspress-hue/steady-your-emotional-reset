const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Steady
        </p>
      </div>
    </footer>
  );
};

export default Footer;
