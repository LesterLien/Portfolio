import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className="h-60 bg-[#191923] flex flex-col justify-center items-center outline-1 outline-white text-[20px] text-white">
        <div>
            <h1>Lester Lien</h1>
        </div>
        <div className='flex flex-row m-2'>
        <div className='ml-2 mr-2'>
            <LinkedInIcon/>
        </div>
        <div className='ml-2 mr-2'>
            <GitHubIcon/>
        </div>
        <div className='ml-2 mr-2'>
            <EmailIcon/>
        </div>
        </div>

        <div className="text-[15px]">
            <p>© 2025 Lester Lien. All rights reserved.</p>
        </div>
    </div>
  )
}
