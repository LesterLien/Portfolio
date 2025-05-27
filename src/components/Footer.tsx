import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Bio } from "../data/bio";

export default function Footer() {
  return (
    <div className="h-60 bg-[#191923] flex flex-col justify-center items-center outline-1 outline-white text-[20px] text-white w-full mt-auto" id="contact">
        <div>
            <h1>Lester Lien</h1>
        </div>

        {Bio.map((contact, index) => (
            <div key={index} className="flex flex-row m-2">
                <a href={contact.linkedin} className="ml-2 mr-2 cursor-hover hover:text-[#854CE6]" target="display">
                <LinkedInIcon />
                </a>

                <a href={contact.github} className="ml-2 mr-2 cursor-hover hover:text-[#854CE6]" target="display">
                <GitHubIcon />
                </a>

                <a href={`mailto:${contact.email}`} className="ml-2 mr-2 cursor-hover hover:text-[#854CE6]">
                <EmailIcon />
                </a>
            </div>
        ))}

        <div className="text-[15px]">
            <p>© 2025 Lester Lien. All rights reserved.</p>
        </div>
    </div>
  )
}
