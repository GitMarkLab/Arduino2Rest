import requests

class Arduino2Rest:
    def __init__(self, ip):
        self.ip = ip

    def send_url(self, url, portdef):
        response = requests.get(url)
        if response.status_code == 200:
            response_data = response.json()
            if response_data.get('return_value') is not None:
                return response_data.get('return_value')
            else:
                return response_data.get(portdef)
        else:
            print("Failed to send request, status code:", response.status_code)
            return -1

    def send_set_analog(self, _type, port, value):
        url = f"http://{self.ip}/set_analog?params={_type}-{port}-{value}"
        portdef = f"{_type}-{port}-{value}"
        return self.send_url(url, portdef)

    def get_value(self, _type, port):
        url = f"http://{self.ip}/{_type}-{port}-value"
        portdef = f"{_type}-{port}-value"
        return self.send_url(url, portdef)

    def set_servo_position(self, port, value):
        return self.send_set_analog("s", port, value)

    def set_digital(self, port, value):
        return self.send_set_analog("d", port, value)

    def set_analog(self, port, value):
        return self.send_set_analog("a", port, value)

    def get_digital(self, port):
        return self.get_value("d", port)

    def get_analog(self, port):
        return self.get_value("a", port)
