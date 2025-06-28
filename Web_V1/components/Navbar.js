

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-2.5 ml-2">
        <div>
            <p>DAKSphere</p>
        </div>
        <ul className="flex gap-12 mr-2 ">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar