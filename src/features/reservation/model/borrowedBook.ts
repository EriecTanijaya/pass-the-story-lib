export type Reservation = {
	bookId: string;
	bookName: string;
	borrower: {
		name: string;
		phoneNumber: string;
	};
};

export type PendingReservation = Reservation & {
	status: "pending";
};

export type ConfirmedReservation = Reservation & {
	status: "confirmed";
};

export type BorrowedReservation = Reservation & {
	status: "borrowed";
	borrowDate: string;
	borrowCondition: string;
};

export type ReturnedReservation = Reservation & {
	status: "returned";
	returnCondition: "string";
	returnDate: "string";
};
