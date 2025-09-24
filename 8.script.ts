// multipul interfacess and class
 interface IBonusServce{
    getBonus():number;

 }

interface IPromotionService{
    getPromotionName():string;

}
interface IEmpNoticePeriod{
    getNoticePeriod(): void;

}

interface IEmpService_1 extends IBonusServce,IEmpNoticePeriod {}


class PerminentEmployee implements IBonusServce,IPromotionService,IEmpNoticePeriod{
    getBonus(): number {
        return 10000
    }
    getPromotionName(): string {
        return "Teamleder"
    }
    getNoticePeriod(): void {
        console.log("3 months notice period");
    }

}

class ContractEmployee implements  IEmpNoticePeriod{
    getNoticePeriod(): void {
      console.log("2 months notice period");

    }

}

//i have agreed this IEmpService contract so now tell me what kind of members i have to implement??

class FreelancerEmployee implements IEmpService_1{
     getBonus():number{
        return 0;
     }
     getNoticePeriod(): void {
    
        console.log("Freelancer do't have notice period")
     }
}












