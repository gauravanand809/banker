import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn ={firstName:'Gaurav',lastName:'Anand'}
  return (
   <main className="flex h-screen w-fulll font-inter">
    <SideBar ></SideBar>
    {children}
   </main>
  );
}
