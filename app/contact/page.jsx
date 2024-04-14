import { HomeIcon, PhoneIcon, MailIcon} from 'lucide-react'

export default function Contact() {
  return (
    <section className=''>
     <div className="container mx-auto">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
           Say Hello
        </div>
        <h1 className="">Let's work together</h1>
        <p className="max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti vero expedita dignissimos natus reprehenderit. Rerum corporis perferendis consequatur ipsam.</p>
      </div>
      <div className="">

      </div>
      <div className="flex items-center gap-x-8 ">
        <MailIcon size={18} className='text-primary'/>
        <div className="">lucian.rosu.atc@gmail.com</div>
        <form>Form</form>
         </div>
     </div>
    </section>
  )
}
