import React from 'react'
import PaymentCard from '../../components/admin-dashboard-components/PaymentCard';

const PaymentTracker = () => {
  return (
    <div>
      <PaymentCard store_name={undefined} id={0} email={''} company_address={''} phone={''} total_orders={0} total_failed_orders={0} data_joined={''} status={''} />
    </div>
  );
}

export default PaymentTracker