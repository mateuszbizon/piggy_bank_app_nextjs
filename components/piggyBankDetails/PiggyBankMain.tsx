"use client"

import { PIGGY_BANK_ADD_PERSON, PIGGY_BANK_BTNS, PIGGY_BANK_EDIT, PIGGY_BANK_PAYMENTS, PIGGY_BANK_PEOPLE } from '@/constants';
import React, { useState } from 'react'
import PiggyBankPeople from './PiggyBankPeople';
import PiggyBankAddPerson from './PiggyBankAddPerson';
import PiggyBankPayments from './PiggyBankPayments';
import PiggyBankEdit from './PiggyBankEdit';

type Props = {
    piggyBankData?: PiggyBankResponse;
    currentUserId: string;
}

function PiggyBankMain({ piggyBankData, currentUserId }: Props) {
    const [view, setView] = useState(PIGGY_BANK_PEOPLE);
    const [btnIndex, setBtnIndex] = useState(0)

    function handleSelectBtn(index: number, viewText: string) {
      setBtnIndex(index)
      setView(viewText)
    }

  return (
    <div className='flex flex-col gap-5 mt-5'>
        <div className='flex justify-center flex-wrap gap-x-7 gap-y-5'>
            {PIGGY_BANK_BTNS.map((btn, index) => {
              return (
                <button key={index} className={`secondary-btn ${index == btnIndex && "bg-secondary-1"}`} onClick={() => handleSelectBtn(index, btn.viewText)}>{btn.btnText}</button>
              )
            })}
        </div>
        {view === PIGGY_BANK_PEOPLE && <PiggyBankPeople people={piggyBankData?.people} />}
        {view === PIGGY_BANK_ADD_PERSON && <PiggyBankAddPerson userId={currentUserId} piggyBank={piggyBankData?.piggyBank} />}
        {view === PIGGY_BANK_PAYMENTS && <PiggyBankPayments payments={piggyBankData?.payments} />}
        {view === PIGGY_BANK_EDIT && <PiggyBankEdit />}
    </div>
  )
}

export default PiggyBankMain