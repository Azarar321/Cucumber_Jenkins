package org.pojo;

public class PageObjectManager {
	
	private LoginPojo login;
	private PaymentPojo payment;
	private SearchHotelPojo search;
	private SelectHotelPojo select;
	
	private static PageObjectManager objManager;
	
	private PageObjectManager() {
		
	}
	
	public static PageObjectManager getInstatnce() {
		return(objManager==null)?objManager=new PageObjectManager(): objManager;
	}
	
	public LoginPojo getLogin() {
		return(login==null)?login=new LoginPojo(): login;
	}
	public SearchHotelPojo getSearch() {
		return(search==null)?search=new SearchHotelPojo(): search;
	}
	public SelectHotelPojo getSelect() {
		return(select==null)?select=new SelectHotelPojo(): select;
	}
	public PaymentPojo getPayment() {
		return(payment==null)?payment=new PaymentPojo(): payment;
	}
}
