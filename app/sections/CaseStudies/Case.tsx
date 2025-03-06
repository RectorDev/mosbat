import LinkTap from '@/components/LinkTap'
import Link from 'next/link'

export default function Case({texts,link}:{texts:string,link:string}) {
  return (
    <div className=" p-[60px] flex flex-col justify-between max-lg:bg-secondary max-lg:rounded-[45px] max-lg:min-w-[350px]">
    <p className='mb-2'>{texts}</p>
    <Link href={link}><LinkTap tran label='Learn more' labelVariant="l-green" arrowVariant="green-tran"/></Link>
  </div>
  )
}
