import Card from './components/card'
import pic from './asset/images/pic.jpg'
function App(){
  return (
    <div>
       <Card title='jiya khan pathan' desc='learning React and making apps and websites for fun!' imgSrc={pic} />
       
    </div>
  );
}
export default App;