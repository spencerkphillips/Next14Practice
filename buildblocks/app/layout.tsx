import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes'
import "./globals.css";

import { Poppins } from 'next/font/google'
import { Lora } from 'next/font/google'

import Provider from './Provider';
 
// If loading a variable font, you don't need to specify the font weight

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const lora = Lora({
  weight: ['400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const BaseData = {
  title: "Build Blocks",
  description: "Collaborate. Build. Together.",
}

export const metadata: Metadata = {
  title: `${BaseData.title} - ${BaseData.description}`,
  description: "Collaborate. Build. Together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={
      {
        baseTheme: dark,
        variables: { colorPrimary: '#3371ff', fontSize: '16px' }
      }
    }>
    <html lang="en">
      <body
        className={`${poppins.variable} ${lora.variable} font-sans antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
