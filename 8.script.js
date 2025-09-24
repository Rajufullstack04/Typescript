class PerminentEmployee {
    getBonus() {
        return 10000;
    }
    getPromotionName() {
        return "Teamleder";
    }
    getNoticePeriod() {
        console.log("3 months notice period");
    }
}
class ContractEmployee {
    getNoticePeriod() {
        console.log("2 months notice period");
    }
}
//i have agreed this IEmpService contract so now tell me what kind of members i have to implement??
class FreelancerEmployee {
    getBonus() {
        return 0;
    }
    getNoticePeriod() {
        console.log("Freelancer do't have notice period");
    }
}
