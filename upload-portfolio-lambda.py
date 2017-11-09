import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    s3 = boto3.resource('s3')
    topic = sns.Topic('arn:aws:sns:us-east-1:029270365025:deployPortfolioTopic')

    try:
        portfolio_bucket = s3.Bucket('cdanmar.com')
        build_bucket = s3.Bucket('portfoliobuild.cdanmar.com')
    
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('carlos_portfolio.zip', portfolio_zip)
    
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, 
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        
        print 'Job Done!'
        topic.publish(Subject='Portfolio Deployed', Message='Portfolio deployed succesfully!')
    except:
        topic.publish(Subject='Portfolio Deploy Failed', Message='The Portfolio was not deployed successully')
        raise
    return 'Hello from Lambda'