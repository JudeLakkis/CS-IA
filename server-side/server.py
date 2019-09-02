from flask import Flask, render_template, url_for

app = Flask(__name__)


# --------------------------------------------------------------------------------
# Routes

@app.route('/')
def timer():
    return render_template('timer.html',)


@app.route('/dev')
def dev():
    return render_template('dev_test.html')

# --------------------------------------------------------------------------------


# Run flask app usin gthe python promp
if __name__ == '__main__':
    app.run(debug=True)
