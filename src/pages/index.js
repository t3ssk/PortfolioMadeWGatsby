import React from "react"
import { DalsiInfo } from "../Components/DalsiInfo/DalsiInfo";
import { Hero } from "../Components/Hero/Hero";
import { Layout } from "../Components/Layout";
import { Skills } from "../Components/Skills/Skills";
import { SubNav } from "../Components/SubNav/SubNav";
import { Zkusenosti } from "../Components/Zkusenosti/Zkusenosti";


let Index = () => ( 
<Layout>
<Hero/>
<SubNav/>  
<Zkusenosti/>
<Skills/>
<DalsiInfo/>
</Layout>
)

export default Index
