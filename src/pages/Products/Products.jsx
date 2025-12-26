// import Header from '../../components/Header'
// import HeaderImage from '../../images/header_bg (7).png'
// import {products} from '../../data'
// import {BsInstagram} from 'react-icons/bs'
// import {AiOutlineTwitter} from 'react-icons/ai'
// import {FaFacebookF} from 'react-icons/fa'
// import {FaLinkedinIn} from 'react-icons/fa'
// import Product from '../../components/Product'
// import './Products.css'
// import { useEffect, useState } from 'react'

// const Products = () => {
// const [displayText, setDisplayText] = useState('')
//   const [isDeleting, setIsDeleting] = useState(false)
//   const [loopNum, setLoopNum] = useState(0)
//   const [typingSpeed, setTypingSpeed] = useState(150)
  
//     const text = "Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque"
  
//     useEffect(() => {
//       let timer
//       const handleType = () => {
//         const i = loopNum % 1
//         const fullText = text
  
//         setDisplayText(isDeleting 
//           ? fullText.substring(0, displayText.length - 1)
//           : fullText.substring(0, displayText.length + 1)
//         )
  
//         setTypingSpeed(isDeleting ? 75 : 150)
  
//         if (!isDeleting && displayText === fullText) {
//           setTimeout(() => setIsDeleting(true), 2000)
//         } else if (isDeleting && displayText === '') {
//           setIsDeleting(false)
//           setLoopNum(loopNum + 1)
//         }
//       }
  
//       timer = setTimeout(handleType, typingSpeed)
//       return () => clearTimeout(timer)
//     }, [displayText, isDeleting, loopNum, typingSpeed])


//   return (
//     <>
//       <Header title="Our Products" image={HeaderImage}>
//         <p className="typing-text">
//             {displayText}
//             <span className="cursor">|</span>
//           </p>
//       </Header>
//       <section className='products'>
//         <div className="container products__container">
//           {
//             products.map(({id, image, name, job, socials}) => (
//               <Product 
//                 key={id} 
//                 image={image} 
//                 name={name} 
//                 job={job} 
//                 socials={[
//                   {icon: <BsInstagram/>, link: socials[0]},
//                   {icon: <AiOutlineTwitter/>, link: socials[1]},
//                   {icon: <FaFacebookF/>, link: socials[2]},
//                   {icon: <FaLinkedinIn/>, link: socials[3]}
//                 ]}
//               />
//             ))
//           }
//         </div>
//       </section>
//     </>
//   )
// }

// export default Products