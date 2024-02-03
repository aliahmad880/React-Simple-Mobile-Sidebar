interface SidebarProps {
    closeSidebar: () => void
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <div className="sm:hidden flex fixed top-0 left-0 w-[100%] h-full bg-[#0000007d] z-50 transition-transform ease-in-out transform">
      {/* Sidebar content */}
      <div className="p-4 bg-white w-[75%] h-full">
        <p className="text-[13px] mb-2 mt-2 cursor-pointer" onClick={closeSidebar}>Close</p>    
        <a href="/">
          <p className="text-[13px] mb-2 mt-2">Home</p>
        </a>
        <a href="/">
          <p className="text-[13px] mb-2 mt-2">About Us</p>
        </a>
      </div>
      <div className="bg-transparent w-[25%] h-full" onClick={closeSidebar}>
        &nbsp;
      </div>
    </div>
  )
}
