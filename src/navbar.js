import React from "react";

import { Link } from 'react-scroll'



const NavBar = ()=>(
    <div className="cont">
<div className="navbar">
<div className="row">
<div className="col">
<h1 className="">JS Documentation </h1> 
</div>
<div className="col">
<Link activeClass="active" className="link"  to="intro" spy={true} smooth={true} duration={500}>Introduction    </Link>

</div>
<div className="col">
<Link activeClass="active" className="link"  to="what" spy={true} smooth={true} duration={500}>What you should already know  </Link>  
</div>
<div className="col">
<Link activeClass="active" className="link"  to="javascript" spy={true} smooth={true} duration={500}>JavaScript and Java </Link>
</div>
<div className="col">
<Link activeClass="active" className="link"  to="hello" spy={true} smooth={true} duration={500}>Hello world  </Link>   
</div>
<div className="col">
<Link activeClass="active" className="link"  to="variable" spy={true} smooth={true} duration={500}>Variables  </Link>
</div>
<div className="col">
<Link activeClass="active" className="link"  to="declare" spy={true} smooth={true} duration={500}>Declaring variables  </Link>
</div>
<div className="col">
<Link activeClass="active" className="link"  to="scope" spy={true} smooth={true} duration={500}>Variable scope  </Link> 
</div>
<div className="col">
<Link activeClass="active" className="link"  to="global" spy={true} smooth={true} duration={500}>Global variables  </Link>
</div>
<div className="col">
<Link activeClass="active" className="link"  to="constant" spy={true} smooth={true} duration={500}>Constants  </Link>   
</div>
<div className="col">
<Link activeClass="active" className="link"  to="data" spy={true} smooth={true} duration={500}>Data types  </Link>     
</div>
<div className="col">
<Link activeClass="active" className="link"  to="if" spy={true} smooth={true} duration={500}>If...else statements </Link>  
</div>
<div className="col">
<Link activeClass="active" className="link"  to="while" spy={true} smooth={true} duration={500}>While statement </Link>    
</div>
<div className="col">
<Link activeClass="active" className="link"  to="function" spy={true} smooth={true} duration={500}>Function declarations </Link>  
</div>
<div className="col">
<Link activeClass="active" className="link"  to="refrence" spy={true} smooth={true} duration={500}>Refrence </Link>
</div>
    </div>
</div>
</div>
)

export default NavBar;