import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
     <h1>Hello สวัสดีครับ</h1>
     <Button variant="contained">Hello World</Button>
    
    </>
  )
}
