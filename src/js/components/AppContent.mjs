import Element from '../Element.mjs'
import NavBar from './AppComponents/NavBar.mjs'
import ContainerDiv from './AppComponents/ContainerDiv.mjs'

const BodyDiv = new Element()

BodyDiv.addInnerHTML('beforeend', NavBar)

BodyDiv.append(ContainerDiv)

export default BodyDiv
