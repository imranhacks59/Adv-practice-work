import './Cart.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Cart() {
  return (
    <div className="cart">
       <div className='top'>
        <h2>Shopping Cart</h2>
       </div>

       <div className='middle'>
        <div className='remove-icon'><p>-</p></div>
        <div className='model-price'>
          <div className='model-name'>iphone 6 plus</div>
          <div className='model-price'>$799</div>
        </div>
        <div className='menu'>
          <div className='number'>1</div>
          <div className='icon'>
            <div className='icon-up'>{ArrowDropUpIcon}</div>
            <div className='icon-down'>{ArrowDropDownIcon}</div>
          </div>
     
        </div>
       </div>
       <div className='middle'>
        <div className='remove-icon'><p>-</p></div>
        <div className='model-price'>
          <div className='model-name'>iphone 6 plus</div>
          <div className='model-price'>$799</div>
        </div>
        <div className='menu'>
        <div className='number'>1</div>
          <div className='icon'>
            <div className='icon-up'>{ArrowDropUpIcon}</div>
            <div className='icon-down'>{ArrowDropDownIcon}</div>
          </div>
        </div>
       </div>
       <div className='middle'>
        <div className='remove-icon'><p>-</p></div>
        <div className='model-price'>
          <div className='model-name'>iphone 6 plus</div>
          <div className='model-price'>$799</div>
        </div>
        <div className='menu'>
        <div className='number'>1</div>
          <div className='icon'>
            <div className='icon-up'>{ArrowDropUpIcon}</div>
            <div className='icon-down'>{ArrowDropDownIcon}</div>
          </div>
        </div>
       </div>
       <div className='middle'>
        <div className='remove-icon'><p>-</p></div>
        <div className='model-price'>
          <div className='model-name'>iphone 6 plus</div>
          <div className='model-price'>$799</div>
        </div>
        <div className='menu'>
        <div className='number'>1</div>
          <div className='icon'>
            <div className='icon-up'>{ArrowDropUpIcon}</div>
            <div className='icon-down'>{ArrowDropDownIcon}</div>
          </div>
        </div>
       </div>

       <div className='button'>View Cart</div>
    </div>
  );
}

export default Cart;