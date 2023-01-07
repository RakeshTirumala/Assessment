import './App.css';
import {FcLike} from 'react-icons/fc'
import {CgComment} from 'react-icons/cg'
import {BiPaperPlane} from 'react-icons/bi'
import {HiOutlineBookmark} from 'react-icons/hi'
import {FcGallery} from 'react-icons/fc'

function App() {
  const userDpLink = "https://res.cloudinary.com/practicaldev/image/fetch/s--SPsAt1tX--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/731263/55064d6f-ed93-49df-8303-904ecfc377af.jpeg";
  const userAltDpLink = "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
  const username = "Rakesh Tirumala"
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const sampleTxt = "Welcome!!!"
  const sampleTxt2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
  const samplePostLink = "https://t3.ftcdn.net/jpg/02/20/14/38/360_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg"
  const bgLink = "https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
  const kakashi = "https://staticg.sportskeeda.com/editor/2022/07/c5bac-16584702697128.png"
  const naruto = "https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo"
  const sasuke = "https://c4.wallpaperflare.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg"

  return (
    <div className="App">
    <section className="postOpt">
      <section>
        <div style={{
          float:"left", marginTop:"2.5%", marginLeft:"2%"
        }}>
          <img 
          className='userDp' src={userDpLink} alt={userAltDpLink} style={{borderRadius:"2rem", 
          width:"3vw"}}></img>
        </div>
        <input className='inptagQues' 
        type="text" placeholder='Ask questions...'
        style={{borderTopStyle:"none", borderLeftStyle:"none",
        borderRightStyle:"none", padding:"5px",
        outline:"none"}}></input>
      </section>
      <div style={{float:"left", width:"10vw", marginTop:"2.5vh", 
      display:"inline-flex", alignItems:"center", marginLeft:"2vw"}}>
        <FcGallery/><p style={{fontSize:"9px", fontWeight:"500"}}>Upload picture</p>
      </div>
      <section className='secButtons'>
        <div style={{float:"right", marginRight:"8%", marginTop:"5%"}}>
          <button className="cancelButton" 
          style={{color:"grey", fontWeight:"550", width:"5.5vw", cursor:"pointer",
          height:"5vh", borderRadius:".5rem", padding:"2%",
          fontSize:"9px", borderStyle:"none", marginRight:"10px"}}
          >Cancel</button>
          <button className="postButton"
          style={{color:"white", background:"#FF5454",cursor:"pointer",
          fontWeight:"550", width:"5.5vw",
          height:"5vh", borderRadius:".5rem",
          padding:"2%", fontSize:"9px",
          borderStyle:"none"}}
          >Post</button>
        </div>
      </section>
    </section>
    <QueryPost1 item={{username:username, userDpLink:userDpLink, userAltDpLink:userAltDpLink, queryTxt:sampleTxt, imgSrc:samplePostLink,date:date, month:month, year:year}}/>
    <QueryPost2 item={{username:username, userDpLink:userDpLink, userAltDpLink:userAltDpLink, queryTxt:sampleTxt2,date:date, month:month, year:year}}/>
    <div style={{float:"right", marginTop:"-132vh", borderRadius:".5rem", backgroundColor:"white", width:"25vw", height:"40vh"}}>
        <img src={bgLink} style={{width:"25vw", height:"10vh"}}></img>
        <img src={userDpLink} style={{borderRadius:"2rem", width:"4vw", marginTop:"-5vh"}}></img>
        <p className='Bio' style={{fontSize:"9px", textAlign:"justify", paddingLeft:"2vw", paddingRight:"2vw"}}>{sampleTxt2}</p>
    </div>
    <div style={{float:"right", marginTop:"-90vh", borderRadius:".5rem", backgroundColor:"white", width:"25vw", height:"50vh"}}>
      <h5 style={{float:"left", marginLeft:"2vw"}}>Best questions for you.</h5>
      <Ques item={{profilePic:kakashi, ques:"Why are you interested in working for this company?"}}/>
      <Ques item={{profilePic:naruto, ques: "Why are you interested in working for this company?"}}/>
      <Ques item={{profilePic:sasuke, ques:"Why are you interested in working for this company?"}}/>
    </div>
    </div>
  );
}

const QueryPost1 = (props)=>{
  console.log(props.item)

  const {username, userDpLink, userAltDpLink, queryTxt, imgSrc,date, month, year} = props.item
  
  return (
    <div className='QueryPost'>
      <div style={{
        float:"left", marginTop:"3.5%", marginLeft:"2%"
      }}>
        <img className='userDp' src={userDpLink} alt={userAltDpLink} 
        style={{borderRadius:"2rem", 
        width:"3vw"}}></img>
      </div>
      <h6 style={{float:"left", marginLeft:"2.5%"}}>{username}</h6>
      <br/>
      <p style={{ float:"left", color:"black", fontSize:"9px",
      marginTop:"3.5vh", fontWeight:"500", marginLeft:"-6.5vw",}}
      >{date+'|'+month+'|'+year}</p>
      <section style={{marginTop:"10vh"}}>
        <p className='pTagQuery'>{queryTxt}</p>
        <img src={imgSrc} style={{width:"38vw", height:"40vh",
        borderRadius:".5rem"}}></img>
      </section>
      <hr style={{ backgroundColor:"black", marginLeft: 19,
        marginRight: 19}}/>
        <section style={{marginLeft:"1.5vw", marginRight:"5vw"}}>
          <div style={{width:"38vw", display:"inline-flex", 
          alignItems:"center", marginTop:"-5vh"}}>
            <FcLike/><h6 style={{marginRight:"6.5vw"}}>100+Likes</h6>
            <CgComment/><h6 style={{marginRight:"6.5vw"}}>Comment</h6>
            <BiPaperPlane/><h6 style={{marginRight:"6.5vw"}}>Share</h6>
            <HiOutlineBookmark/><h6>Save</h6>
          </div>
        </section>
      </div>
  )}

  const QueryPost2 = (props)=>{
    console.log(props.item)
  
    const {username, userDpLink, userAltDpLink, queryTxt,date, month, year} = props.item
    
    return (
      <div className='QueryPost2'>
        <div style={{
          float:"left", marginTop:"3.5%", marginLeft:"2%"
        }}>
          <img className='userDp' src={userDpLink} alt={userAltDpLink} 
          style={{borderRadius:"2rem", 
          width:"3vw"}}></img>
        </div>
        <h6 style={{float:"left", marginLeft:"2.5%"}}>{username}</h6>
        <br/>
        <p style={{ float:"left", color:"black", fontSize:"9px",
        marginTop:"3.5vh", fontWeight:"500", marginLeft:"-6.5vw",}}
        >{date+'|'+month+'|'+year}</p>
        <section style={{marginTop:"10vh"}}>
          <p className='pTagQuery'>{queryTxt}</p>
        </section>
        <hr style={{ backgroundColor:"black", marginLeft: 19,
          marginRight: 19}}/>
          <section style={{marginLeft:"1.5vw", marginRight:"5vw"}}>
            <div style={{width:"38vw", display:"inline-flex", 
            alignItems:"center", marginTop:"-5vh"}}>
              <FcLike/><h6 style={{marginRight:"6.5vw"}}>100+Likes</h6>
              <CgComment/><h6 style={{marginRight:"6.5vw"}}>Comment</h6>
              <BiPaperPlane/><h6 style={{marginRight:"6.5vw"}}>Share</h6>
              <HiOutlineBookmark/><h6>Save</h6>
            </div>
          </section>
        </div>
    )}
  
  const Ques = (props)=>{
    const {profilePic, ques} = props.item
    return(
      <div style={{display:"inline-flex", alignItems:"center", marginLeft:"2vw"}}>
        <img src={profilePic} style={{borderRadius:".24rem", width:"2.5vw", height:"5vh"}}></img>
        <p style={{fontSize:"9px", textAlign:"justify", paddingLeft:"2vw", paddingRight:"2vw"}}>{ques}</p>
      </div>
    )
  }

export default App;
