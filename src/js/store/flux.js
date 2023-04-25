const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
				
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars:async (element)=>{
				let baseUrl="https://www.swapi.tech/api/" + element
				try {
					let response = await fetch(baseUrl)
					if(!response.ok) return response.status

					let data=await response.json()
					let obj={}
					obj[element]=data.results
					setStore(obj)
				}catch (error){
					console.error(error)	
				}
				 
			}
		}
	};
};

export default getState;
