
import { Calculator } from "./Calculator";

class DecCalculator extends Calculator  {
    constructor(settings){
        super(settings);
        console.log(this.getName());
    }
    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr('contenteditable', 'true').trigger('focus');

        activeElement.on('keydown', e => {
            e.preventDefault();
            if(e.which >= 48 && e.which <= 57 ){
                e.target.textContent = Number(String.fromCharCode(e.which));
            }
        });
    }
    initEvents(){
        super.initEvents()
        $('.dec-calculator .operator-bar span').on('click', e => {
            this.checkNumber();
            this.updateResult();
        })
    }
    add(numberX, numberY){
        let sum = 0;
        let result = [0,0,0,0,0,0,0,0,0];
        for (let i = numberX.length - 1; i >=0; i--){
            let sum = numberX[i] + numberY[i] + result[i];
            if (sum > 9){
                sum -= 10;
                result[i] = sum;
                result[i-1] += 1;
            } else {
                result[i] = sum;
            }
        }
        return result;
    }
    updateResult(){
        let resultSpan = $('.dec-calculator .result-bit span');
        for (let i = this.resultNumberArray.length -1 , j = 0; i >= 0, j < resultSpan.length ; i--, j++){
            resultSpan.eq(j).text(this.resultNumberArray[i]);
        }
    }
}

export { DecCalculator  };
