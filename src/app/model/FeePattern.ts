import { RecieptComponent } from '../layout/reciept/reciept.component';

export class FeePattern {
    fee_pattern_class_name: string;
    fee_pattern_type:string;
    fee_pattern_batch:string;
}
export class ListFeePattern {
FeeName : String[];
}
export class ListBatches {
    batch : String[];
}

export class FeePatternHead {
    fee_pattern_name: string;
    fee_collect_pattern:string;
    total_academic_fee:string;
    total_tution_fee:string;
    total_hostel_fee:string;
}

export class Batch {
    batch:string;
    academic_year:string;
    start_date:string;
    end_date:string;
    intake:string;
}

export class PaymentPending {
    id: number;
    amount: number;
    monthly_data: MonthlyData[];
    payment_mode:string;
    cheque_no:number;
}

export class PaymentsResponse {
   data: string;
   fee_recipt: Reciept;
}

export class Reciept {
    amount_paid: string;
    application_no: string;
    batch: string;
    date: string;
    time: string;
    father_name: string;
    studentName: string;
 }

export class MonthlyData {
    start: string;
    end: string;
    status: string;
    feePending: number;
    feePaid: number;
    trnc: string;
}
