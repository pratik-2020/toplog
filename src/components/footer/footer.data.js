import { FaFacebook, FaTwitter, FaGithub, FaDribbble, FaWhatsapp } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import Whatsapp from 'assets/images/whatsapp.png'
export default [
  {
    header: 'Contact',
    items: [
      {
        path: 'https://api.whatsapp.com/send?phone=919359858126',
        label: 'Whatsapp',
        name: 'Whatsapp',
        src:Whatsapp,
        icon: <FaWhatsapp />,
      },
      {
        path: 'mailto:omfutariya24@gmail.com',
        label: 'Email',
        name: 'Email',
        src:Whatsapp,
        icon: <AiOutlineMail />,
      }
    ],
  },
];
