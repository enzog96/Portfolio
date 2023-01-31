import "./Footer.css";
import React from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsFileCheck} from "react-icons/bs";


const Footer = () => {
  return (
      
<footer id="about" className="p-4 rounded-lg shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0 title2">
            <h2 className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Portfolio</h2>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="flex gap-1">
                <BsLinkedin className="icon"/>
                <a href="https://www.linkedin.com/in/enzogrillowebdeveloper/" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
            </li>
            <li className="flex gap-1">
                <BsGithub className="icon"/>
                <a href="https://github.com/enzog96" className="mr-4 hover:underline md:mr-6">Github</a>
            </li>
            <li className="flex gap-1">
                <BsFacebook className="icon"/>
                <a href="https://www.facebook.com/profile.php?id=100066476267029" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
            </li>
            <li className="flex gap-1">
                <BsFileCheck className="icon"/>
                <a href="https://www.canva.com/design/DAFW-6K8fnE/jhGYGwHxOM2FRIQJWwszpA/view?utm_content=DAFW-6K8fnE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="hover:underline">CV</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="#" className="hover:underline">enzogrillo96@gmail.com</a>
    </span>
</footer>

  );
};

export default Footer;
