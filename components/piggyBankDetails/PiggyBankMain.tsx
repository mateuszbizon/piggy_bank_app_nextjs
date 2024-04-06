"use client"

import { PIGGY_BANK_ADD_PERSON, PIGGY_BANK_EDIT, PIGGY_BANK_PAYMENTS, PIGGY_BANK_PEOPLE } from '@/constants';
import React, { useState } from 'react'
import PiggyBankPeople from './PiggyBankPeople';
import PiggyBankAddPerson from './PiggyBankAddPerson';
import PiggyBankPayments from './PiggyBankPayments';
import PiggyBankEdit from './PiggyBankEdit';

type Props = {
    piggyBank?: PiggyBank;
    currentUserId: string;
}

function PiggyBankMain({ piggyBank, currentUserId }: Props) {
    const [view, setView] = useState(PIGGY_BANK_PEOPLE);

  return (
    <div className='flex flex-col gap-5 mt-5'>
        <div className='flex justify-center flex-wrap gap-x-7 gap-y-5'>
            <button className='secondary-btn' onClick={() => setView(PIGGY_BANK_PEOPLE)}>Osoby</button>
            <button className='secondary-btn' onClick={() => setView(PIGGY_BANK_ADD_PERSON)}>Dodaj osobę</button>
            <button className='secondary-btn' onClick={() => setView(PIGGY_BANK_PAYMENTS)}>Wpłaty</button>
            <button className='secondary-btn' onClick={() => setView(PIGGY_BANK_EDIT)}>Edytuj</button>
        </div>
        {view === PIGGY_BANK_PEOPLE && <PiggyBankPeople />}
        {view === PIGGY_BANK_ADD_PERSON && <PiggyBankAddPerson />}
        {view === PIGGY_BANK_PAYMENTS && <PiggyBankPayments />}
        {view === PIGGY_BANK_EDIT && <PiggyBankEdit />}
    </div>
  )
}

export default PiggyBankMain