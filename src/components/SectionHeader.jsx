import Sectoin from "../assets/section-header.png";
import { OverPack } from 'rc-scroll-anim';
import { motion } from "framer-motion"

export default function SectionHeader({ title, description }) {
    return (
        <div className='space-y-4'>
            <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }} viewport={{ once: true }}>
                <img src={Sectoin} className='w-16' alt={title}/>
            </motion.div>
            <div className='flex flex-col gap-4 xl:w-9/12 '>
                <motion.span initial={{ x: -25 }} whileInView={{ x: 0 }} viewport={{ once: true }} className='font-semibold 2xl:text-5xl xl:text-4xl text-3xl'>{title}</motion.span>
                <span className='font-medium 2xl:text-lg xl:text-base text-sm text-grey-60'>{description}</span>
            </div>
        </div>
    );
}