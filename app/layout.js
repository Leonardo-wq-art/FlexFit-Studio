
import Navbar from '@/components/Navbar'


import './globals.css'


export const metadata={
  title: 'FlexFit Studio',
  description: 
  ' At FlexFit Studio, we understand that every body is unique. Thats why our team of certified personal trainers is dedicated to crafting workout and meal plans tailored to your individual needs, preferences, and goals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
       <div className='w-full h-full'>
   <Navbar/>
        {children}

        </div>
        </body>
    </html>
  )
}
