import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
