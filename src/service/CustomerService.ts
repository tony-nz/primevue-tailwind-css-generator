export default class CustomerService {
  getCustomer() {
    return fetch("/data/customers.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
