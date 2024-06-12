
function Tarif(props) {
     let className;
         if (props.isSelected=='true')
         {
                className = 'regular'
            }
    
            return (
     <div>
           <section >
            <article className={className}>
              <div>
                <h4 class='pricename'>{props.name}</h4>
                <p>руб <span style = {{ fontSize: '30px', justifyContent: 'center', alignItems: 'center'}}>{props.price}</span> мес</p>
                <div class="text">до {props.speed} Мбит/сек</div>
                <div class='text2'>Объем включенного трафика не ограничен</div>
             </div>
            </article>
            </section>
      </div>
       

    );
}
export default Tarif;