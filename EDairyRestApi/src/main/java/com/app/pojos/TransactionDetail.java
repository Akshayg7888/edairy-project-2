package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

@Entity(name = "TransactionDetails")
public class TransactionDetail extends BaseEntity{
	
	@OneToOne
	@JoinColumn(name = "orderId", referencedColumnName = "id")
	private Order order;
	
	private double UTRno;
	
	private double amount;
	
	@CreationTimestamp
	private LocalDate date;

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public double getUTRno() {
		return UTRno;
	}

	public void setUTRno(double uTRno) {
		UTRno = uTRno;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public TransactionDetail(Order order, double uTRno, double amount, LocalDate date) {
		super();
		this.order = order;
		UTRno = uTRno;
		this.amount = amount;
		this.date = date;
	}

	public TransactionDetail() {
		super();
	}
	
	
}