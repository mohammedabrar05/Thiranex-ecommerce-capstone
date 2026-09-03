const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
export const state={cart:read("abrarstore-cart",[]),favorites:read("abrarstore-favorites",[]),theme:localStorage.getItem("abrarstore-theme")||"light"};
const save=()=>{localStorage.setItem("abrarstore-cart",JSON.stringify(state.cart));localStorage.setItem("abrarstore-favorites",JSON.stringify(state.favorites))};
export function addToCart(id){const x=state.cart.find(i=>i.id===id);x?x.qty++:state.cart.push({id,qty:1});save()}
export function changeQty(id,d){const x=state.cart.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<1)state.cart=state.cart.filter(i=>i.id!==id);save()}
export function removeFromCart(id){state.cart=state.cart.filter(i=>i.id!==id);save()}
export function toggleFavorite(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save()}
export function cartCount(){return state.cart.reduce((s,x)=>s+x.qty,0)}
export function cartTotal(ps){return state.cart.reduce((s,x)=>s+(ps.find(p=>p.id===x.id)?.price||0)*x.qty,0)}
export function setTheme(t){state.theme=t;localStorage.setItem("abrarstore-theme",t)}