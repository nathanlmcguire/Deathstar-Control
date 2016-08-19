function fire() {
if(document.getElementById("B").hasAttribute("Alderaan"))
    {
     document.getElementById("Alderaan").innerHTML = "DESTROYED"    
    }
else ifdocument.getElementById("B").hasAttribute("Tatooine"))
    {
    document.getElementById("Tatooine").innerHTML = "DESTROYED"    
    }
else if(ID = "B3")
    {
     document.getElementById("Caruscant").innerHTML = "DESTROYED"   
    }
else
    {
     document.getElementById("Naboo").innerHTML = "DESTROYED"   
    }
}

function findInfo() {
if(this.id = "B1")
    {
    document.getElementById("Alderaan").innerHTML = "Alderaan: Considered a 'Shining Star' of the Core Worlds. Wild grasslands and old mountain ranges dominated the planet's surface."  
    }
else if(this.id = "B2")
    {
    document.getElementById("Tatooine").innerHTML = "Tatooine: The planet's lack of resources, brutal heat, and decentralized population have made governing the planet nearly impossible."      
    }
else if(this.id = "B3")
    {
    document.getElementById("Coruscant").innerHTML = "Coruscant: Due to its location and large population, the galaxy's main trade routes go through Coruscant, making it the richest and most influential world in the galaxy."      
    }
else
    {
    document.getElementById("Naboo").innerHTML = "Naboo: Located in the Chommell sector, Naboo is the home planet of Padmé Amidala and Jar Jar Binks, as well as Senator (later Supreme Chancellor and then Emperor) Palpatine."      
    }
}